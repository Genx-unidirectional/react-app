function PostsTab() {
  let items: JSX.Element[] = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowComponent index={i} />);
  }
  return <ul className=" ">{items}</ul>;
}
export default PostsTab;

function SlowComponent({ index }: { index: number }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 2) {}
  return <li>Post #{index}</li>;
}
