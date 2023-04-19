import { Text } from "@gw/design-system/components/text";

import { sum } from "@gw/utils/math/sum";
export default function Home() {
  return (
    <>
      <div>
        <h1>Sum of 1 and 2 is {sum(1, 2)}</h1>
        <Text variant="h1">Sum of 1 and 2 is {sum(1, 2)}</Text>
      </div>
    </>
  );
}
