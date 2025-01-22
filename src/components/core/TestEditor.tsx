import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import type { Editor as TinyMCEEditor } from 'tinymce';

interface TestEditorProps {
  updateFunction: React.Dispatch<React.SetStateAction<string>>;
}

const TestEditor: React.FC<TestEditorProps> = ({ updateFunction }) => {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  const logContent = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      updateFunction(content);
    }
  };

  return (
    <div>
      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        onInit={(_, editor) => {
          editorRef.current = editor as unknown as TinyMCEEditor;
        }}
        onChange={logContent}
        initialValue=""
        init={{
          height: 300,
          menubar: false,
          placeholder:"write your message here.",
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'help', 'wordcount', 'emoticons',
          ],
          toolbar: `
            undo redo | bold italic underline strikethrough forecolor backcolor | fontselect fontsizeselect formatselect | 
            alignleft aligncenter alignright alignjustify | bullist numlist outdent indent
          `,
          toolbar_mode: 'wrap',
          content_style: 'body { font-family:Arial,Helvetica,sans-serif; font-size:14px }',
          branding: false,
          statusbar: true,
          wordcount: {
            countHTML: false,
            showCharCount: true,
          },
          image_caption: true,
          media_live_embeds: true,
        }}
      />
    </div>
  );
};

export default TestEditor;
