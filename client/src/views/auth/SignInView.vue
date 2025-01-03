<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { z } from 'zod'
import { useToast } from 'primevue/usetoast'
import { zodResolver } from '@primevue/forms/resolvers/zod'

import { REDIRECT_SIGNUP } from '@/shared/constants'

const router = useRouter()
const toast = useToast()

// TODO: Create as utils fc with args?
const redirectToSignUp = () => {
  router.push(REDIRECT_SIGNUP)
}

const getInitData = () => {
  return {
    username: '',
    password: '',
  }
}

const formData = ref(getInitData())

const resolver = zodResolver(
  z.object({
    username: z.string().min(3, { message: 'Username is required.' }),
    password: z.string().min(8, { message: 'Password short or null.' }),
  }),
)

// TODO: /v1/user/signin handle
const onFormSubmit = ({ valid }: { valid: boolean }) => {
  if (valid) {
    toast.add({
      severity: 'success',
      summary: 'Form is submitted.',
      life: 3000,
    })

    const {
      value: { username, password },
    } = formData

    toast.add({
      severity: 'info',
      summary: `username=${username}, password=${password}`,
      life: 3000,
    })

    // clear ref values
    formData.value = getInitData()
  }
}
</script>

<template>
  <Toast />

  <Form :resolver @submit="onFormSubmit" class="auth_form_container">
    <h1>Sign In</h1>

    <FormField v-slot="$field" as="section" name="username" initialValue="">
      <InputText
        type="text"
        placeholder="Username"
        class="wfull"
        v-model="formData.username"
      />
      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error?.message }}
      </Message>
    </FormField>

    <FormField v-slot="$field" asChild name="password" initialValue="">
      <section>
        <Password
          toggleMask
          fluid
          type="text"
          placeholder="Password"
          v-model="formData.password"
          :feedback="false"
        />
        <Message
          v-if="$field?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $field.error?.message }}
        </Message>
      </section>
    </FormField>

    <div class="auth_form_footer">
      <Button type="submit">Submit</Button>
      <Button @click="redirectToSignUp" severity="secondary">Sign up</Button>
    </div>
  </Form>
</template>

<style>
.auth_form_container {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 12px auto;
  gap: 12px;
}

.auth_form_footer {
  display: flex;
  justify-content: space-between;
}

.wfull {
  width: 100%;
}
</style>
