import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import classes from './index.module.css';

const App = (industryData) => {
  const challengesData = industryData?.industryData?.chellenges || '';
  return (
    <div>
      <div className={classes.content}>
        <CKEditor
          config={{
            licenseKey:
              '/csp6RBM4FUmp0X9L8U33OaSZx0KybKKSZ3WH8CWH/J2yRXpapBi4AIG13/H+bsI/lGm4YJtMphjQwu+r00=',
          }}
          onReady={(editor) => {
            if (!editor.editing.view.document.isFocused) {
              // editor.ui.view.toolbar.element.remove();
              editor = editor;
            }
          }}
          editor={Editor}
          data={challengesData}
        />
      </div>
    </div>
  );
};

export default App;
