import React, { useState, useEffect } from "react"

/*
function Posts() {
    const postData = [{ user: "meowed", userImage: "assets/img/meowed.svg", content: "assets/img/gato-telefone.svg", userLikedImage: "assets/img/respondeai.svg", userLiked: "respondeai", likes: "101.523" }, { user: "barked", userImage: "assets/img/barked.svg", content: "assets/img/dog.svg", userLikedImage: "assets/img/adorable_animals.svg", userLiked: "adorable_animals.svg", likes: "299.792.458" }]

        return (
            postData.map((post, i) => {
                return (
                        <div class="post">
                            <div class="topo">
                                <div class="usuario">
                                    <img src={post.userImage} />
                                    {post.user}
                                </div>
                                <div class="acoes">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </div>
                            </div>
    
                            <div class="conteudo">
                                <img src={post.content} onClick={()=> {
                                    const like = document.querySelectorAll(".like")
                                    if(like[i].name === "heart-outline"){
                                        like[i].name = "heart";
                                        like[i].classList.add("red")
                                    }
                                }}/>
                            </div>
    
                            <div class="fundo">
                                <div class="acoes">
                                    <div>
                                        <ion-icon name="heart-outline" class="like" onClick={(like) => {
                                            if(like.target.name === "heart-outline"){
                                                like.target.name = "heart";
                                                like.target.classList.add("red")
                                            }else{
                                                like.target.name ="heart-outline"
                                                like.target.classList.remove("red")
                                            }
                                        
                                        }}></ion-icon>
                                        <ion-icon name="chatbubble-outline"></ion-icon>
                                        <ion-icon name="paper-plane-outline"></ion-icon>
                                    </div>
                                    <div>
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </div>
                                </div>
    
                                <div class="curtidas">
                                    <img src={post.userLikedImage} />
                                    <div class="texto">
                                        Curtido por <strong>{post.userLiked}</strong> e <strong>outras {post.likes} pessoas</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            })
        )
    }
    */

function Posts(props) {
    const [like, setLike] = useState(false)
    const [shape, setShape] = useState(false)

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImage} />
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.content} onClick={() => {
                    setLike(true)
                    setShape(true)
                }
                }></img>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={shape ? "heart" : "heart-outline"} class={`md hydrated ${like ? "red" : ""}`} onClick={() => {
                            setLike(!like)
                            setShape(!shape)
                        }}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.userLikedImage} />
                    <div class="texto">
                        Curtido por <strong>{props.userLiked}</strong> e <strong>outras {props.likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function Post() {

    return (
        <div class="posts">
            <BuildFeed></BuildFeed>
        </div>
    )
}

function BuildFeed() {
    const postData = [{ user: "meowed", userImage: "assets/img/meowed.svg", content: "assets/img/gato-telefone.svg", userLikedImage: "assets/img/respondeai.svg", userLiked: "respondeai", likes: "101.523" }, { user: "barked", userImage: "assets/img/barked.svg", content: "assets/img/dog.svg", userLikedImage: "assets/img/adorable_animals.svg", userLiked: "adorable_animals.svg", likes: "299.792.458" }]

    return (
        postData.map((postData) => {
            return (
                <Posts userImage={postData.userImage} user={postData.user} content={postData.content} userLikedImage={postData.userLikedImage} userLiked={postData.userLiked} likes={postData.likes}></Posts>
            )
        })
    )
}