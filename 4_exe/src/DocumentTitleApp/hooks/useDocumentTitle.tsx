import { useEffect } from 'react';

const useDocumentTitle = (title: string) : void => {
    useEffect((): void => {
        document.title = title;
    }, [title]);
}

export default useDocumentTitle