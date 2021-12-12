import React from "react";

// propsを分割代入することで可読性をあげる
// 同じ名前の属性は省略可 color:color.⇒color,
// childrenにて子要素を取得
const ColorfulMesssage = (props) => {
    const {color, children} = props;
    const contentStyle = {
        color,
        fontSize: '18px'
    };

    return (
        <p style={contentStyle}>{children}</p>
    );
}

export default ColorfulMesssage;