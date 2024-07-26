import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/uz.js'; // Uzbek tilini qo'shing
import './CKEditorComponent.css'

interface CKEditorComponentProps {
  value: string;
  onChange: (data: string) => void;
}

const CKEditorComponent: React.FC<CKEditorComponentProps> = ({ value, onChange }) => {
  const [editorData, setEditorData] = useState<string>(value);

  useEffect(() => {
    setEditorData(value);
  }, [value]);

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={{
          language: 'uz', // Tilni o'zgartirish
          toolbar: [
            'heading', '|',
            'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|',
            'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells', '|',
            'undo', 'redo'
          ],
          image: {
            toolbar: [
              'imageTextAlternative', 'imageStyle:full', 'imageStyle:side'
            ]
          },
          table: {
            contentToolbar: [
              'tableColumn', 'tableRow', 'mergeTableCells'
            ]
          }
        }}
        data={editorData}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorData(data);
          onChange(data);
        }}
      />
    </div>
  );
};

export default CKEditorComponent;
