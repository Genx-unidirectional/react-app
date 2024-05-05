import Form from "@/components/dashcraft/invoices/create-form";
import Breadcrumbs from "@/components/dashcraft/invoices/breadcrumbs";
import { fetchCustomers } from "@/lib/data";

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashcraft/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashcraft/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
