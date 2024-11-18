import PropertyDetailsMain from "@/components/PropertyDetails/PropertyDetailsMain";
import React, { Suspense } from "react";
import { PROPERTY_URL } from "../../../../apis/url";
import PropertyDetailsSkeleton from "@/shared/Skeleton/PropertyDetailsSkeleton";

export async function generateMetadata({ params }, parent) {
  const id = params.id;
  try {
    const response = await fetch(`${PROPERTY_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }
    const res = await response.json();
    const product = res?.data;
    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: product.title,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [...previousImages, { url: product?.images[0] }],
      },
      twitter: {
        card: "summary_large_image",
        title: product.title,
        description: product.description,
        images: [...previousImages, { url: product?.images[0] }],
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      title: 'Quick Search',
      description: 'Find an apartment, condo, office space, house, and lot for sale or for rent in top locations.',
      openGraph: {
        title: 'Quick Search',
        description: 'Find an apartment, condo, office space, house, and lot for sale or for rent in top locations.',
        images: [],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Quick Search',
        description: 'Find an apartment, condo, office space, house, and lot for sale or for rent in top locations.',
        images: [],
      },
    };
  }
}

// export async function getData(id) {
//   const res = await fetch(`${PROPERTY_URL}/${id}`, { cache: "no-cache" });

//   console.log(res, '=======res ============res =============res')
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// async function PropertyDetails({ params }) {
//   const id = params?.id;
//   const res = await getData(id);

export async function getData(id) {
  try {
    const res = await fetch(`${PROPERTY_URL}/${id}`, { cache: "no-cache" });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function PropertyDetails({ params }) {
  const id = params?.id;
  let res;

  try {
    res = await getData(id);
  } catch (error) {
    // Handle error gracefully, perhaps show an error message or redirect
    return <div>Error loading property details</div>;
  }

  return (
    <div className="relative pt-14">
      <Suspense
        fallback={
          <div className="max-container mt-20">
            <PropertyDetailsSkeleton />
          </div>
        }
      >
        <PropertyDetailsMain propertiesData={res?.data} id={id} />
      </Suspense>
    </div>
  );
}

export default PropertyDetails;
