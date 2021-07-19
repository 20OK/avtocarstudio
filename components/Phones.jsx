export default function Phones({ phones }) {
  return (
    <ul
      dangerouslySetInnerHTML={{
        __html: phones,
      }}
    />
  );
}
