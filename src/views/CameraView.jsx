// fullscreen camera screen
import { useRef, useState, useEffect } from 'react'
import './CameraView.css'

export default function CameraView() {
  var videoRef = useRef(null)
  var [camera, setCamera] = useState('user')

  useEffect(function () {
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: camera, width: { ideal: 3840 }, height: { ideal: 2160 }, frameRate: { ideal: 60 } },
      audio: false
    }).then(function (stream) {
      videoRef.current.srcObject = stream
    })

    return function () {
      if (videoRef.current) {
        videoRef.current.srcObject.getTracks().forEach(function (t) { t.stop() })
      }
    }
  }, [camera])

  return (
    <div className="camera-fullscreen">
      <video ref={videoRef} autoPlay playsInline muted className={camera === 'user' ? 'camera-feed-full mirrored' : 'camera-feed-full'} />
      <button className="capture-btn" />
      <button className="flip-btn" onClick={function () { setCamera(camera === 'user' ? 'environment' : 'user') }}>⟳</button>
    </div>
  )
}
