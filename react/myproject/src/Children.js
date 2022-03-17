import React, { useEffect, useRef, useState } from 'react';

export default React.forwardRef((props,ref) => {
    return <div ref= {ref}>
        {props.name}
    </div>
})