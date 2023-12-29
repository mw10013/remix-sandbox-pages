import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Sandbox Pages" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Sandbox</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="container mx-auto py-4 prose-">
        <h1 className="">Remix Sandbox Pages</h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 flex-wrap">
            <button className="btn">Button</button>
            <Button className="btn">Button</Button>
            <Button className="btn btn-primary">Button</Button>
            <Button className="btn btn-neutral">Button</Button>
            <Button className="btn btn-primary">Button</Button>
            <Button className="btn btn-secondary btn-outline">Button</Button>
            <Button className="btn btn-ghost">Button</Button>
            <Button className="btn btn-link">Button</Button>
            <Button className="btn btn-primary" isDisabled>
              Disabled
            </Button>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* <Select>
        <Label>Favorite Animal</Label>
        <Button>
          <SelectValue />
          <span aria-hidden="true">▼</span>
        </Button>
        <Popover>
          <ListBox>
            <ListBoxItem>Cat</ListBoxItem>
            <ListBoxItem>Dog</ListBoxItem>
            <ListBoxItem>Kangaroo</ListBoxItem>
          </ListBox>
        </Popover>
      </Select> */}
      </div>
    </>
  );
}
