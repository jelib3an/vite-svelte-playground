<script lang="ts">
  import { serialize } from '@deepkit/type';
  import Child from './lib/Child';
  import Parent from './lib/Parent';

  const child = new Child();
  child.name = 'John';

  const parent = new Parent(child);
  parent.name = 'Jane';

  const json = JSON.stringify(serialize<Parent>(parent), null, 2);
</script>

<main>
  <pre>{json}</pre>
</main>
