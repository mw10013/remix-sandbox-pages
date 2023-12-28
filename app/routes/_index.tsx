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
    <div className="p-8 prose">
      <h1 className="">Welcome to Remix Sandbox Pages</h1>
      <div className="flex gap-2 flex-wrap">
        <button className="btn">Button</button>
        <button className="btn btn-primary">Button</button>
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
  );
}
