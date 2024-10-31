import React, { useState } from 'react';
import Modal from './Modal';

const images = [
  'https://lh3.googleusercontent.com/pw/AP1GczPrCg_DQCXkN-9yX78VxSvUHHHK7QbVp139nbG9FLNFDcK6TgRT3JB18yzrwVvb6qIMaIufOBdt5CrB6RO_mT5mXIBBUxQAL0W2vRLeKCuYmxY1f1MchySDLLH3k0cD65gG3a0fq2iA9PekwbyEbs7XoQ=w1156-h1156-s-no-gm',
  'https://lh3.googleusercontent.com/pw/AP1GczOn5ib68rXz0x-H_9b3e8BfZxVuKaqw3ApBOAIkBA9yJRvI6UEYg-_63GvzlkfySZmMHpHlmm-1wXSGZ8R2kGsmLkwIP4HurZ5gj-8JMpn3PVIbML2T9dRvbWIl_OlQEBBCatE0KGHp1g9pNB1FI-UCJA=w1540-h1156-s-no-gm',
  'https://lh3.googleusercontent.com/pw/AP1GczOg-dhRppjl1PXf5B8QiOUdShbgLWTnx9Hu5bGSBsBoM6L7J7ibNNtpSu_SFMhCJY0GHLh5OvxXO1J5trY7XWCKtfl44unbLeMoiH6EwI_7LoCxneFI6rtX386_wKnNUiTgXaiJE5_UfhdpK3yEwxYh1A=w867-h1156-s-no-gm',
  'https://lh3.googleusercontent.com/pw/AP1GczOrcxRiI-zxMbNNrMsjKbvu2GAlE4V14fiYDqqnTG3jNEeg0dIjIdB1exNJJhouxCLO1VlWbwWcvZr2ofwcxPBzN1y9rR0muVp4u39M6fAaJeuMdemMeNImnsg0ZIF4B2GdBYhmbEKoapqIa4geHOpSgQ=w2400-h1080-s-no-gm',
  'https://lh3.googleusercontent.com/pw/AP1GczPsSjkdAs-QYdXAyXcRhq0moPY9em0b1YeVYd6knCsUgLnYOspVeIvAHNNNHC6T8U8P4xO1hk1QDy7q6OdGDLlnhHrCCuK-Ge61k0y210d756X5WfJ9edeFLnO4VI3rzjkwJJnyumgEIC8FCQKMQEQmFQ=w2400-h1083-s-no-gm',
  'https://lh3.googleusercontent.com/pw/AP1GczMxY_NoCIE35Xja6JBqECneFGyx0ASbbgbqh_h2gmZSux_8-qmeko7DOIvEev7VYmWx0_MxtjhobACcxifLkjffe1TfqW3ccHjUUSGSamLhiLQ_1OT_Qrw6PVPHmMVz3Z33vdVIbi7iJsKx_G8IuSw2eg=w640-h640-s-no-gm'
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 px-4" id="gallery">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-gold font-serif mb-12 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage || ''}
      />
    </section>
  );
}