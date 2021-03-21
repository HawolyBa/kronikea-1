import { Upload, message, Form, Input } from "antd";
import { LoadingOutlined, PlusOutlined, StarOutlined } from "@ant-design/icons";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const UploadImage = ({ form, image, name }) => {
  const [loading, setLoading] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState(image ? image : "");

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      form.setFieldsValue({ [name]: info.file.originFileObj });
      // setImage(info.file.originFileObj);
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageUrl(imageUrl);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Form.Item name={name} label="Upload a cover">
        <Upload
          showUploadList={{
            showRemoveIcon: true,
            removeIcon: <StarOutlined />,
          }}
          listType="picture-card"
          className="cover-uploader"
          showUploadList={true}
          beforeUpload={beforeUpload}
          onChange={handleChange}
          maxCount={1}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
      </Form.Item>
      <Form.Item
        label="Image Copyright"
        name="imageCopyright"
        rules={[
          {
            required: form.getFieldValue(name) ? true : false,
            message: "An image copyright is required",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default UploadImage;
