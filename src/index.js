//import "./style.css"

console.log("test")
const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // liタグ生成
    const li = document.createElement("li");

    // pタグ生成
    const p = document.createElement("p");
    p.innerText = inputText;

    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        deleteFromIncompleteList(completeButton.parentNode.parentNode);
        
        // 完了リストに追加する要素
        const addTarget = completeButton.parentNode.parentNode;

        // TODO内容テキストを取得
        const text = addTarget.firstElementChild.firstElementChild.innerText;
        
        
        
        // div以下を初期化
        const div = addTarget.firstElementChild;
        div.textContent = null;

        // pタグ生成
        const p = document.createElement("p");
        p.innerText = text;
        
        // buttonタグ生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        
        // divタグの子要素に各要素を設定
        div.appendChild(p);
        div.appendChild(backButton);

        // 完了リストに追加
        document.getElementById("complete-list").appendChild(addTarget);

    })

    // button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ(li)を未完了リストから削除
        deleteFromIncompleteList(deleteButton.parentNode.parentNode);
    })
   
    // divタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    
    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li)
}

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}

window.onload = function(){
    document.getElementById("add-button").addEventListener("click", () => onClickAdd());
}