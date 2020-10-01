import React, { useContext, useEffect, useState, createContext } from 'react'
import { FavoritePostsContext } from '../../context/favoritePostsContext'
import { CurrentPostContext } from '../../context/currentPostContext'
import { ModalContext } from '../../context/modalPostInfoContext'
import { PostsContext } from "../../context/postsContext";
import { connect } from 'react-redux'
import { SortableElement } from 'react-sortable-hoc'
import changeInfo from './../../actionCreator/changeInfo'
import style from './Post.module.css'
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../utils/posts';

const Post = ({post, check, changeInfo, id, index}) => {
    const {addPost, removePost} = useContext(FavoritePostsContext)
    const {postInformation} = useContext(CurrentPostContext)
    const {toggleModal} = useContext(ModalContext)
    const {info} = useContext(PostsContext);

    const [checked, setChecked] = useState(check)

    const [{ isDragging }, drag] = useDrag({
        item: {
            type:ItemTypes.POST,
            id:id,
            title:post.title,
            body:post.body
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        })
    })

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

    return (
        <div className={isDragging ? style.ContainerInMove : style.Container} key={id} index={index} ref={drag}>
            <input 
                type="checkbox" 
                title="add to favorite"
                checked={!!checked} 
                className={style.Button} 
                onClick={handleChildClick}
                onChange={handleChanges}
            />
            <input type="image" src={require('./../../img/search.svg')} title="watch" alt="watch" className={style.searchIcon} onClick={sendInfo}/>
            {info ?
                <h3 className={style.Title}>
                    {post.title.slice(0,post.title.indexOf(info))}
                    <span className={style.FindText}>{info}</span>
                    {post.title.slice(post.title.indexOf(info) + info?.length)} 
                </h3> 
                :
                <h3 className={style.Title}>{ post.title }</h3>  
            }            
            <div>{post.body}</div>
        </div>   
    )
}

const mapStateToProps = (state, ownProps) => {
    return state.filter(obj => obj.id === ownProps.id)[0] ? {check: state.filter(obj => obj.id === ownProps.id)[0].check} : (<div class="loader"></div>)}

export default connect(mapStateToProps, {
    changeInfo
})(Post);
