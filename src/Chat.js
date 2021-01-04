/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import * as SendBird from "sendbird";

import "./Chat.css";

import {
  SendBirdProvider,
  ChannelList,
  Channel,
  ChannelSettings
  // sendBirdSelectors,
  // withSendBird
} from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

export default function Chat() {
  const [showSettings, setShowSettings] = useState(false);
  const [currentChannelUrl, setCurrentChannelUrl] = useState(null);
  const dataUser = JSON.parse(sessionStorage.getItem("data"));
  console.log("dataUser", dataUser);
  // const Welcome = ({ nickname }) => (
  //   <div>{`Hello, ${nickname || "unknown user"}`}</div>
  // );
  // const WelcomeWithSendBird = withSendBird(Welcome, state => {
  //   const sdk = sendBirdSelectors.getSdk(state);
  //   const currentUser = sdk && sdk.currentUser;
  //   return currentUser;
  // });
  // const MyCustomPreview = ({ channel, onLeaveChannel }) => (
  //   <div style={{ border: "1px solid gray" }}>
  //     <img height="20px" width="20px" src={channel.coverUrl} />
  //     <button
  //       type="button"
  //       onClick={() => {
  //         const callback = () => {
  //           console.warn("Leave channel success");
  //         };
  //         onLeaveChannel(channel, callback);
  //       }}
  //     >
  //       {" "}
  //       Leave
  //     </button>
  //   </div>
  // );
  const queries = {
    applicationUserListQuery: {
      limit: 0
    }
  };

  const sb = new SendBird({ appId: "D36ADF40-475A-46DF-98B5-38BD1182C989" });
  const channelHandler = new sb.ChannelHandler();
  const channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
  channelListQuery.includeEmpty = false;
  channelListQuery.order = "latest_last_message"; // 'chronological', 'latest_last_message', 'channel_name_alphabetical', and 'metadata_value_alphabetical'
  channelListQuery.limit = 15; // The value of pagination limit could be set up to 100.

  if (channelListQuery.hasNext) {
    channelListQuery.next((groupChannels, error) => {
      if (error) {
        return;
      }

      console.log(groupChannels);
    });
  }
  channelHandler.onMessageReceived = function(channel, message) {
    console.log("messad", message);
  };

  sb.addChannelHandler(sessionStorage.getItem("access_token"), channelHandler);
  return (
    <div style={{ height: "100vh", marginBottom: "64px" }}>
      <SendBirdProvider
        appId="D36ADF40-475A-46DF-98B5-38BD1182C989"
        accessToken={sessionStorage.getItem("access_token")}
        userId={dataUser.id.toString()}
        nickname={dataUser.firstname}
        allowProfileEdit={false}
        disableUserProfile
      >
        <div className="sendbird-app__wrap">
          <div className="sendbird-app__channellist-wrap">
            <ChannelList
              queries={queries}
              isOnline
              allowProfileEdit={false}
              onChannelSelect={channel => {
                if (channel && channel.url) {
                  setCurrentChannelUrl(channel.url);
                }
              }}
            />
          </div>
          <div className="sendbird-app__conversation-wrap">
            <Channel
              channelUrl={
                currentChannelUrl || sessionStorage.getItem("chanelUrl")
              }
              onChatHeaderActionClick={() => {
                setShowSettings(true);
              }}
            />
          </div>
        </div>
        {showSettings && (
          <div className="sendbird-app__settingspanel-wrap">
            <ChannelSettings
              channelUrl={currentChannelUrl}
              onCloseClick={() => {
                setShowSettings(false);
              }}
            />
          </div>
        )}
      </SendBirdProvider>
    </div>
  );
}
