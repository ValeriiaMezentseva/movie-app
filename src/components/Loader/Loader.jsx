import { BallTriangle } from 'react-loader-spinner';

import { LoaderBox } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderBox>
            <BallTriangle color="#bd0000" height={80} width={80} />
        </LoaderBox>
    )
};

