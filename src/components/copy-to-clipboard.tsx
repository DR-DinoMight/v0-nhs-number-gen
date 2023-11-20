import React from 'react';
import { Button } from './ui/button';

type CopyToClipboardButtonProps = {
    textToCopy: string;
    onSuccess: (message: string) => void;
    onError: (message: string) => void;
};

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({ textToCopy, onSuccess, onError }) => {
    const handleCopy = () => {
        if (!textToCopy) {
            onError('Nothing to copy');
            return;
        }

        navigator.clipboard.writeText(textToCopy)
            .then(() => onSuccess('Copied to clipboard!'))
            .catch(() => onError('Failed to copy'));
    };

    return (
        <Button
            className="w-auto mt-4 bg-white text-[#005eb8] dark:text-[#005eb8] border-white hover:bg-[#005eb8] dark:hover:bg-[#005eb8] hover:text-white dark:hover:text-white"
            variant="outline"
            onClick={handleCopy}
        >
            Copy to Clipboard
        </Button>
    );
};

export default CopyToClipboardButton;
