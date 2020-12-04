import React from "react";

export default function ContentContainer({className, children}) {
    return <div className={`max-w-3xl mx-auto px-8 pt-8 lg:pt-12` + className }>{children}</div>
}
