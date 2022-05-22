import * as React from "react"
import Plugin1 from "../images/svg/qgis-logo.svg"
import Plugin2 from "../images/svg/python-logo.svg"
import Plugin3 from "../images/svg/leaflet-logo.svg"
import Plugin4 from "../images/svg/react-leaflet.svg"
import Plugin5 from "../images/svg/mapbox-logo.svg"
import Plugin6 from "../images/svg/html-logo.svg"

export const Plugins = ({ text }) => {
  return (
    <div>
      <h6 className="uppercase text-333333 text-sm font-semibold mb-6 text-center">
        {text}
      </h6>
      <div className="flex justify-between max1300:flex-wrap max1300:justify-around">
        <Plugin1 className="m-10" />
        <Plugin2 className="m-10" />
        <Plugin3 className="m-10" />
        <Plugin4 className="m-10" />
        <Plugin5 className="m-10" />
        <Plugin6 className="m-10" />
      </div>
    </div>
  )
}
