import React from "react";
import dynamic from "next/dynamic";
import {
  Form,
  Row,
  Col,
  InputNumber,
  Input,
  Divider,
  Spin,
  Popconfirm,
} from "antd";
import { EditorState } from "draft-js";
import { convertToHTML, convertFromHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import ItemSelector from "./ItemSelector";
import RadioButton from "./RadioButton";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const ChapterForm = ({
  form,
  submit,
  characters,
  locations,
  setBody,
  loadingChapter,
  type,
  chapter,
  deleteChapter,
  storyid,
}) => {
  const [status, setStatus] = React.useState("true");

  const [editorState, setEditorState] = React.useState(
    type === "add"
      ? EditorState.createEmpty()
      : EditorState.createWithContent(convertFromHTML(chapter && chapter.body))
  );

  const onEditorStateChange = (state) => {
    setEditorState(state);
    const html = convertToHTML(editorState.getCurrentContent());
    setBody(html);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={submit}
      initialValues={
        type === "add"
          ? {
              number: 0,
              title: "",
              body: "",
              status: true,
              locations: [],
              characters: [],
            }
          : { ...chapter, status: chapter.status }
      }
    >
      <Row gutter={[24, 24]}>
        <Col lg={4} md={4} sm={24} xs={24}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "A number is required",
              },
            ]}
            label="Number"
            name="number"
          >
            <InputNumber min={0} />
          </Form.Item>
        </Col>
        <Col lg={16} md={16} sm={24} xs={24}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "A title is required",
              },
            ]}
            name="title"
            label="Title"
          >
            <Input />
          </Form.Item>
        </Col>
        <RadioButton
          lg={4}
          md={4}
          xs={24}
          sm={24}
          name="status"
          label="Status"
          num1={1}
          num2={2}
          label1="Publish"
          label2="Draft"
          form={form}
          setFunc={setStatus}
          val={status}
        />
      </Row>
      <Form.Item name="body">
        <Editor
          editorKey="editor"
          defaultEditorState={editorState}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          placeholder="Start writing your story..."
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
      </Form.Item>
      <Divider />
      <Row gutter={24}>
        <Col md={12} xs={24} sm={24}>
          <ItemSelector
            label={"Characters in this chapter"}
            arrInForm={"characters"}
            form={form}
            type="chapter"
            subject={characters}
            lg1={24}
            subjectType="characters"
          />
        </Col>
        <Col md={12} xs={24} sm={24}>
          <ItemSelector
            label={"Locations in this chapter"}
            arrInForm={"locations"}
            form={form}
            type="chapter"
            subject={locations}
            lg1={24}
            subjectType="locations"
          />
        </Col>
      </Row>
      {type === "add" ? (
        loadingChapter ? (
          <button disabled className="spin-btn">
            <Spin />
          </button>
        ) : (
          <button type="submit">Create</button>
        )
      ) : loadingChapter ? (
        <button disabled className="spin-btn">
          <Spin />
        </button>
      ) : (
        <Row gutter={[32, 16]}>
          <Col md={16} sm={24} xs={24}>
            <button type="submit">Edit</button>
          </Col>
          <Col md={8} sm={24} xs={24}>
            <Popconfirm
              title="Do you really want to delete this character ?"
              onConfirm={() => deleteChapter(chapter.id, storyid)}
            >
              <button className="delete-btn" type="button">
                Delete
              </button>
            </Popconfirm>
          </Col>
        </Row>
      )}
    </Form>
  );
};

export default ChapterForm;
