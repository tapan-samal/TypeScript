interface ParentType {
  children: React.ReactNode;
}
const Parent = (props: ParentType) => {
  return (
    <>
      <h2>5. Higher Order Component: </h2>
      <div>{props.children}</div>
    </>
  );
};

export default Parent;
