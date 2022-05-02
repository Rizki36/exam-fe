import { FC } from 'react';

import { useAppSelector } from '@/configs/redux/hooks';

const SectionsNAudioItem: FC<{ className?: string }> = ({ className }) => {
  const { selectedBook } = useAppSelector((state) => state.book);

  return (
    <div className={`flex gap-x-4 justify-center mt-3 ${className}`}>
      <small>📃 {selectedBook?.sections?.length ?? 0} Chapters</small>
      <small>⏰{Math.round((selectedBook?.audio_length ?? 0) / 60)} Min</small>
    </div>
  );
};

export default SectionsNAudioItem;
