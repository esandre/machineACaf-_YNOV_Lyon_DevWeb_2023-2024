declare global {
    namespace jest {
        interface Matchers<R> {
            unCaféEstServi() : R;
        }
    }
}

export {};
