const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="even:[&>*]:bg-gray-200">
          <tr className="text-sm md:text-base [&>*]:py-6 [&>*]:px-1 bg-red-50 ">
            <td className="hidden md:block">1237861238721</td>
            <td className="">19.07.2023</td>
            <td className="">89.90</td>
            <td className="hidden md:block">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base [&>*]:py-6 [&>*]:px-1 ">
            <td className="hidden md:block">1237861238721</td>
            <td className="">19.07.2023</td>
            <td className="">89.90</td>
            <td className="hidden md:block">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base [&>*]:py-6 [&>*]:px-1 ">
            <td className="hidden md:block">1237861238721</td>
            <td className="">19.07.2023</td>
            <td className="">89.90</td>
            <td className="hidden md:block">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="">On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
