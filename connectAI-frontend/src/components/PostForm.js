import React, { forwardRef } from "react";
import { Form, Upload, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";

export const PostForm = forwardRef((props, formRef) => { // 往外传递一个component，formRef随便写 后面ref=和这个一样就行，好处就是外面的component可以检查component type
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const normFile = (e) => (Array.isArray(e) ? e : e?.fileList);

  return (
    <Form name="validate_other" {...formItemLayout} ref={formRef}> 
      <Form.Item
        name="description"
        label="Message"
        rules={[
          {
            required: true,
            message: "Please input your message!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Dragger">
        <Form.Item
          name="uploadPost"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
          rules={[
            {
              required: true,
              message: "Please select an image/video...",
            },
          ]}
        >
          <Upload.Dragger name="files" beforeUpload={() => false}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
    </Form>
  );
});
