import { Form, Input, Tooltip, Space } from "antd";
import React from "react";

const LinkComp = ({ name, label, info, setInfo }) => {
  const validate_url = (url, name) => {
    if (name === "twitter" && url) {
      if (
        /^(https?:\/\/)?((w{3}\.)?)twitter\.com\/(#!\/)?[a-z0-9_]+$/i.test(url)
      ) {
        setInfo({
          ...info,
          errors: {
            ...info.errors,
            twitter: "",
          },
        });
      } else {
        setInfo({
          ...info,
          errors: {
            ...info.errors,
            twitter: `The link is not a valid Twitter url`,
          },
        });
      }
    } else if (name === "facebook" && url) {
      if (
        /^(https?:\/\/)?((w{3}\.)?)facebook\.com\/(#!\/)?[a-z0-9_]+$/i.test(url)
      ) {
        setInfo({
          ...info,
          errors: {
            ...info.errors,
            facebook: "",
          },
        });
      } else {
        setInfo({
          ...info,
          errors: {
            ...info.errors,
            facebook: `The link is not a valid Facebook url`,
          },
        });
      }
    } else if (name === "instagram" && url) {
      if (
        /^(https?:\/\/)?((w{3}\.)?)instagram\.com\/(#!\/)?[a-z0-9_]+$/i.test(
          url
        )
      ) {
        setInfo({
          ...info,
          errors: {
            ...info.errors,
            instagram: "",
          },
        });
      } else {
        setInfo({
          ...info,
          errors: {
            ...info.errors,
            instagram: `The link is not a valid Instagram url`,
          },
        });
      }
    } else if (name === "deviantart" && url) {
      if (
        /^(https?:\/\/)?((w{3}\.)?)deviantart\.com\/(#!\/)?[a-z0-9_]+$/i.test(
          url
        )
      ) {
        setInfo({
          ...info,
          errors: {
            ...info.errors,
            deviantart: "",
          },
        });
      } else {
        setInfo({
          ...info,
          errors: {
            ...info.errors,
            deviantart: `The link is not a valid Deviantart url`,
          },
        });
      }
    } else if (!url) {
      setInfo({
        ...info,
        errors: {
          ...info.errors,
          [name]: ``,
        },
      });
    }
  };

  React.useEffect(() => {
    validate_url(info.facebook, "facebook");
  }, [info.facebook]);
  React.useEffect(() => {
    validate_url(info.twitter, "twitter");
  }, [info.twitter]);
  React.useEffect(() => {
    validate_url(info.instagram, "instagram");
  }, [info.instagram]);
  React.useEffect(() => {
    validate_url(info.deviantart, "deviantart");
  }, [info.deviantart]);
  return (
    <>
      <Input
        addonBefore={
          <Tooltip title={label}>
            <ion-icon name={`logo-${name}`}></ion-icon>
          </Tooltip>
        }
        addonAfter={
          !info.errors[name] &&
          info[name] && <ion-icon name="checkmark"></ion-icon>
        }
        onChange={(e) => {
          setInfo({
            ...info,
            [name]: e.target.value,
          });
        }}
        placeholder={`Enter a link. Ex: https://${name}.com/JaneDoe`}
        value={info[name]}
      />
      {info.errors[name] && (
        <div className="ant-form-item-explain ant-form-item-explain-error">
          <div role="alert">{info.errors[name]}</div>
        </div>
      )}
    </>
  );
};

export default LinkComp;
