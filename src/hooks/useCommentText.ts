import { useState } from 'react';

const useCommentText = () => {
  const [commentText, setCommentText] = useState<string>('');
  return { commentText, setCommentText };
};

export default useCommentText;
