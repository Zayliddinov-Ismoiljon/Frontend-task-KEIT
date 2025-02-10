import React, { useState } from 'react';
import { Upload, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { RcFile, UploadFile } from 'antd/es/upload/interface';
import { useTranslation } from 'react-i18next';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

interface AvatarUploadProps {
  onChange?: (value: string) => void;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ onChange }) => {
  const {t} = useTranslation()
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewVisible(true);
  };

  const handleChange = async ({ fileList: newFileList }: { fileList: UploadFile[] }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      const file = newFileList[0];
      if (file.originFileObj) {
        const base64 = await getBase64(file.originFileObj as RcFile);
        if (onChange) {
          onChange(base64);
        }
      }
    } else {
      if (onChange) {
        onChange('');
      }
    }
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  return (
    <>
      <Upload
        listType="picture-circle"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={beforeUpload}
      >
        {fileList.length >= 1 ? null : <div style={{width:'100%'}}><PlusOutlined /><div style={{ marginTop: 8 }}>{t('Upload Avatar')}</div></div>}
      </Upload>
      <Modal open={previewVisible} title={`${t('Preview')}`} footer={null} onCancel={handleCancel}>
        <img alt="avatar" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default AvatarUpload;
