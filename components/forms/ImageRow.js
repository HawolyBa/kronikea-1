import React from "react";
import { Row, Col, Form, Input } from "antd";
import isImageUrl from "is-image-url";

import UploadImage from "./UploadImage";

const ImageRow = ({ form, itemImage, name }) => {
  const [linkVisible, setLinkVisible] = React.useState(false);
  const [uploadVisible, setUploadVisible] = React.useState(false);

  const showLink = () => {
    form.setFieldsValue({ [name]: null });
    setLinkVisible(true);
    setUploadVisible(false);
  };

  const showUpload = () => {
    form.setFieldsValue({ [name]: null });
    setLinkVisible(false);
    setUploadVisible(true);
  };

  return (
    <>
      {!uploadVisible && !linkVisible && (
        <div className="upload-btns">
          <button onClick={showUpload} type="button" className="upload-btn">
            Upload a cover
          </button>

          <button onClick={showLink} type="button" className="upload-btn">
            Submit a link to a cover
          </button>
        </div>
      )}
      {uploadVisible && (
        <Row align="bottom" gutter={[24, 24]}>
          <Col md={12} sm={24} xs={24}>
            <UploadImage name={name} form={form} image={itemImage} />
          </Col>
          <Col md={12} sm={24} xs={24}>
            <button onClick={showLink} type="button" className="upload-btn">
              OR Submit a link to a cover
            </button>
          </Col>
        </Row>
      )}
      {linkVisible && (
        <Row align="bottom" gutter={[24, 24]}>
          <Col sm={24} xs={24} md={12} lg={12}>
            <Form.Item
              rules={[
                {
                  type: "url",
                  message: "This field must be a valid url.",
                },
                () => ({
                  validator(_, value) {
                    if (isImageUrl(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The link needs to be an image")
                    );
                  },
                }),
              ]}
              label="Submit a link to your image"
              name={name}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <button onClick={showUpload} type="button" className="upload-btn">
              Upload a cover
            </button>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ImageRow;
