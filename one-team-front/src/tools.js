export const ConvertDate = data => {
  const date = new Date(data);
  let day = date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const MakeCompletedUrl = url => {
  const server = "http://localhost";
  const rootAPI = "/api/v1";
  const port = 3001;

  if (!url) throw Error("Parameter [url] is not defined.");
  return `${server}:${port}${rootAPI}/${url}`;
};
