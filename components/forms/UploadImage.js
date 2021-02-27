import { Upload, message, Form } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

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

const UploadImage = ({ storyInfo, onChangeFunc }) => {
  const [loading, setLoading] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        onChangeFunc({ ...storyInfo, image: imageUrl });
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
    <Form.Item>
      <div className="upload-image">
        <Upload
          name="image"
          listType="picture-card"
          className="cover-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="image" style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
        </Upload>
        <div className="input-froup">
          <label htmlFor="imageCopyright">Image copyright</label>
          <input
            required
            type="text"
            id="imageCopyright"
            className="form-input"
            onChange={(e) =>
              onChangeFunc({ ...storyInfo, imageCopyright: e.target.value })
            }
            value={storyInfo.imageCopyright}
          />
        </div>
      </div>
    </Form.Item>
  );
};

export default UploadImage;
