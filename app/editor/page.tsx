export default function EditorPage() {
  return (
    <section className="container h-screen w-screen">
      <iframe 
        src={process.env.NODE_ENV === 'development'
          ? "/editor/index.html/#/designer" 
          : "https://manqingchen.github.io/editor/index.html#/designer"}
        className="h-full w-full"
        allow="fullscreen"
      />
      </section>
  )
}
