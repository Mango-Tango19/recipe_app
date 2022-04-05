import './suggested.css';
import Emoji from '../emoji-component/emoji';
import { useMemo } from 'react';

const IngridientElement = ({ emoji }) => {
    const emojiObj = useMemo(() => {
        return {
            chicken: '🍗',
            beef: '🍖',
            vegetables: '🥗',
        };
    }, []);

    return (
        <div className='col-lg-4 col-sm-4  col-xs-1 d-flex justify-content-center py-3 '>
            <a href='/' className='thumb-menu btn btn-info'>
                <Emoji label={emoji} symbol={emojiObj[emoji]} />
            </a>
        </div>
    );
};

const SuggestedRecipes = () => {
    return (
        <section id='gtco-menu' className='section-padding'>
            <div className='container'>
                <div className='section-content'>
                    <div className='row mb-2'>
                        <div className='col-md-12'>
                            <div className='heading-section text-center'>
                                <h2>Most Popular Ingridients</h2>
                            </div>
                        </div>
                    </div>

                    {
                        <div className='row justify-content-center'>
                            <IngridientElement emoji='chicken' />

                            <IngridientElement emoji='beef' />

                            <IngridientElement emoji='vegetables' />
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default SuggestedRecipes;
