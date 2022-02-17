import NextHead from "next/head";

type IType = {
  title: string;
};

export default function PagesHead({ title } : IType) {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
}
