import { Result, Button } from "antd";

const RedirectComp = ({ condition, type, children, verifyEmail }) => {
  return condition ? (
    children
  ) : type === "404" ? (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  ) : type === "403" ? (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary">Back Home</Button>}
    />
  ) : type === "redirect" ? (
    (window.location.href = "/auth")
  ) : type === "verify" ? (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you cannot post until you verify your email"
      extra={
        <Button type="primary" onClick={() => verifyEmail()}>
          Send a new email
        </Button>
      }
    />
  ) : (
    <div></div>
  );
};

export default RedirectComp;
