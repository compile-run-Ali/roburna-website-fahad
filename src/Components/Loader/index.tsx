import React from 'react'
import ReactLoading from "react-loading";


interface Props {
  loading: boolean
}

const style: any = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  zIndex: '200',
  transform: `translate(${-50}%, ${-50}%)`
}

const Loader: React.FC<Props> = ({ loading }) => {
  return (
    <div style={style}>
      {loading && (<ReactLoading type="spokes" color="#0a1369"
        height={200} width={200} />)}
    </div>


  )
}

export default Loader
