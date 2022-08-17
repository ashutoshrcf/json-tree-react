import data from "./data.json";
import { Typography } from "antd";
import TreeView from "./TreeView/TreeView";

const { Text } = Typography;

const Demo = () => {
  return (
    <Text code>
      <TreeView data={data} name="data" />
    </Text>
  );
};

export default Demo;
