import { useState } from 'react';

const useCommentText = (): {
  commentText: string;
  setCommentText: (comment: string) => string | void;
} => {
  const [commentText, setCommentText] = useState<string>('');
  return { commentText, setCommentText };
};

export default useCommentText;
