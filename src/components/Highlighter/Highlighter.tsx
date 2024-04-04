import SyntaxHighlighter from 'react-syntax-highlighter';

interface HiglighterProps {
  code: string;
  language?: string;
}

export const Highlighter = ({ code, language = 'javascript'} : HiglighterProps) => {
  return (
    <SyntaxHighlighter customStyle={{ fontSize: '18px' }}  language={language}>
      {code}
    </SyntaxHighlighter>
  );
};