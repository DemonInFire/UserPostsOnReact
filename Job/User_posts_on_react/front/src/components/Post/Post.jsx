import React, { useContext, useEffect, useState, useRef } from 'react'
import { FavoritePostsContext } from '../../context/favoritePostsContext'
import { CurrentPostContext } from '../../context/currentPostContext'
import { ModalContext } from '../../context/modalPostInfoContext'
import { PostsContext } from "../../context/postsContext";
import { connect } from 'react-redux'
import changeInfo from './../../actionCreator/changeInfo'
import style from './Post.module.css'
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../../utils/posts';

const Post = ({post, check, changeInfo, moveItem, id, index}) => {
    const {addPost, removePost} = useContext(FavoritePostsContext)
    const {postInformation} = useContext(CurrentPostContext)
    const {toggleModal} = useContext(ModalContext)
    const { info } = useContext(PostsContext)

    const [checked, setChecked] = useState(check)
    const ref = useRef(null);

    const [{ isDragging }, drag] = useDrag({
        item: {
            type:ItemTypes.POST,
            index:index,
            ...post,
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        })
    })

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.POST,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const sendInfo = () => {
        postInformation(post.title, post.body)
        toggleModal()
    }

    const handleChildClick = (e) => {
        e.stopPropagation()
    }

    const handleChanges = () => {
        setChecked(!checked)
        changeInfo(checked, id)
    }
    
    useEffect(() => {
        checked ? addPost(post.title, post.body, id) : removePost(id)
    },[checked])

    drag(drop(ref));

    return (
        <div 
            className={isDragging ? style.ContainerInMove : style.Container} 
            key={id} 
            index={index} 
            ref={ref}
            role='post_container' 
        >
            <input 
                type="checkbox" 
                title="add to favorite"
                checked={!!checked} 
                className={style.Button} 
                onClick={handleChildClick}
                onChange={handleChanges}
                role='add_favorite'
            />
            <input 
                type="image"
                label='watch_posts_content' 
                src={require('./../../img/search.svg')} 
                title="watch" 
                alt="watch" 
                className={style.searchIcon} 
                onClick={sendInfo}
                role='watch_posts_content'
            />
            {info ?
                <h3 className={style.Title}>
                    {post.title.slice(0,post.title.indexOf(info))}
                    <span className={style.FindText} role='title'>{info}</span>
                    {post.title.slice(post.title.indexOf(info) + info?.length)} 
                </h3> 
                :
                <h3 className={style.Title} role='title'>{ post.title }</h3>  
            }            
            <div role='content'>{post.body}</div>
        </div>   
    )
}

const mapStateToProps = (state, ownProps) => {
    return state.filter(obj => obj.id === ownProps.id)[0] ? 
        {check: state.filter(obj => obj.id === ownProps.id)[0].check
    } : (
        <div class="loader"></div>
)}

export default connect(mapStateToProps, {
    changeInfo
})(Post);
