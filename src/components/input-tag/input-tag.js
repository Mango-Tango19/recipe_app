import './input-tag.css'

const InputTag = ({title, handleClickOnTag}) => {
    return (
        <button onClick={(e) => handleClickOnTag(e)}
            className='btn btn-primary btn-sm position-absolute search_tag'
        >
           {title}
            <i className='fa-solid fa-rectangle-xmark'></i>
        </button>
    );
};

export default InputTag;
