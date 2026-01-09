const n=`---
id: 2
title: Concurrency and Parallelism in Python
date: Jan 9, 2026
readTime: 
category: Learning
excerpt: Introduction to concurrency and parallelism in Python
author: Rujeet J.
---

# Concurrency and Parallelism in Python

Python provides multiple ways to run more than one task within a program. These approaches differ in **how tasks are scheduled**, **whether they run simultaneously**, and **what kinds of problems they solve efficiently**.

---

## Core Execution Units

### Thread
- An OS-level execution unit within a process
- Scheduled **preemptively** (OS decides when to switch) by the operating system
- In **CPython**, threads are constrained by the **Global Interpreter Lock (GIL)**:
  - Only one thread can execute Python bytecode at a time which limits true parallelism
- Well-suited for **I/O-bound workloads**, not CPU-bound workloads

---

### Async Task (\`asyncio\`)
- A logical unit of work managed by an **event loop**
- Runs in a **single thread**
- Uses **cooperative multitasking** (tasks decides when to switch)
- Tasks explicitly yield control using \`await\`
- Enables high concurrency without parallel execution

---

### Process
- Independent OS-level execution unit
- Has its **own memory space** and **own Python interpreter**
- Each process has its own GIL
- Can execute truly in parallel on multiple CPU cores
- Higher overhead due to inter-process communication

---

## Concurrency

**Concurrency** means making progress on multiple tasks during overlapping periods of time. Tasks do not necessarily execute at the same instant, but the system switches between them to utilize resources efficiently.

### Why Concurrency?
Many programs spend time waiting:
- Network responses
- Disk I/O
- External services

While one task waits, another can run.

### Common Concurrency Approaches in Python
- Asynchronous programming (\`asyncio\`)
- Multithreading (\`threading\`, \`ThreadPoolExecutor\`)

### When to Use
- Network requests
- File I/O
- Database calls
- High-latency operations

### Minimal Code Examples

#### **Asynchronous Programming (\`asyncio\`)**
Best for large numbers of I/O-bound tasks.

\`\`\` python
import asyncio

async def fetch_data(id):
    await asyncio.sleep(1)  # simulate I/O
    print(f"Task {id} completed")

async def main():
    tasks = [fetch_data(i) for i in range(3)]
    await asyncio.gather(*tasks)

asyncio.run(main())
\`\`\`
**Key point:**
All tasks run in a single thread and voluntarily yield control using await.

#### **Multithreading**
Useful for I/O-bound tasks with blocking libraries.

\`\`\` python
from concurrent.futures import ThreadPoolExecutor
import time

def fetch_data(id):
    time.sleep(1)  # simulate I/O
    return f"Thread {id} completed"

with ThreadPoolExecutor(max_workers=3) as executor:
    results = executor.map(fetch_data, range(3))

for result in results:
    print(result)
\`\`\`
**Key point:**
Threads overlap execution, but in CPython they do not run Python bytecode in parallel due to the GIL.

---

## Parallelism

**Parallelism** means executing multiple tasks **simultaneously**.

### Why Parallelism?
Some workloads are limited by CPU speed rather than waiting time.

### How Python Achieves Parallelism
- Multiprocessing (\`multiprocessing\`)
- \`ProcessPoolExecutor\`

Each process has:
- Its own interpreter
- Its own GIL
- Access to a different CPU core

### When to Use
- Mathematical computations
- Data processing
- Image or video processing
- Machine learning preprocessing

### Minimal Code Examples

#### **Multiprocessing**
Used for CPU-bound workloads requiring true parallelism.

\`\`\`python
from concurrent.futures import ProcessPoolExecutor
import time

def compute(id):
    time.sleep(1)  # simulate CPU work
    return f"Process {id} completed"

with ProcessPoolExecutor(max_workers=3) as executor:
    results = executor.map(compute, range(3))

for result in results:
    print(result)
\`\`\`
**Key point:**
Each process runs independently and can execute in parallel on different CPU cores.

---

## Rule of Thumb
- I/O-bound tasks → Concurrency
    - asyncio or threads
- CPU-bound tasks → Parallelism
    - multiprocessing
`;export{n as default};
