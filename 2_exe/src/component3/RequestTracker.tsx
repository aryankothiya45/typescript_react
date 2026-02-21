import { JSX, useState , useCallback} from "react";


const RequestTracker = (): JSX.Element => {
  const [pending, setPending] = useState<number>(0);

  const handleBuy = useCallback((): void => {
    setPending(pending => pending + 1);
    setPending(pending => pending + 1);
    setPending(pending => pending + 1);
  }, []);
 
  const handleSell = useCallback((): void => {
    setPending(pending => pending - 1);
  }, []);

  return(
    <>
      <p>Pending requests: {pending}</p>
      <button onClick={handleBuy}>Buy</button>
      <button onClick={handleSell}>Sell</button>
      <hr />
    </>
  );
}
export default RequestTracker;