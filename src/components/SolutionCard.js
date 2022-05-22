import * as React from "react"

export const SolutionCard = ({ img, title, text, onClick }) => {
  return (
    <div className="max-w-410 w-full h-5120 rounded-lg shadow-md mb-12 mx-2 max1000:max-w-320 max3000:h-420 cursor-pointer" onClick={() => onClick()}>
      <img className="h-200 rounded-t-lg object-cover" src={img} alt="img" />
      <div className="p-6 max700:p-3">
        <h3 className="text-111827 text-xl">{title}</h3>
        <p className="text-333333">{text}</p>
      </div>
    </div>
  )
}
