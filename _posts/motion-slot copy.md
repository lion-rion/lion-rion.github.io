---
title: 'UE5の綺麗なグラフィック動画まとめてみた'
excerpt: 'Framer MotionのmotionコンポーネントとRadix UIのユーティリティのコンポーネントSlotを組み合わせることで、アニメーションの再利用性を爆上げします。'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2022/07/01'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
tags:
  - 'React'
  - 'aaa'
  - 'FramerMotion'
---

https://stitches.dev/

## 概要

Framer Motion を React Slot で運用すると、アニメーションの再利用性が飛躍的に向上します。

### React Slot

https://www.radix-ui.com/docs/primitives/utilities/slot

`Slot`は子コンポーネントに props を渡す役割を持ちます。

これが

```tsx
<Slot color="red">
  <AnyComponent />
</Slot>
```

実質的にこうなります。

```tsx
<AnyComponent color="red" />
```
