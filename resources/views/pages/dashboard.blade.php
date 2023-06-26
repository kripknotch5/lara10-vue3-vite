@extends('layouts.master')
@section('title', 'Online Store')
@section('content')

@endsection
@push('script')
    <script type="module" src="{{ Vite::asset('resources/js/component-scripts/app.js') }}" defer></script>
@endpush
@section('footer')
    <!-- footer includes here -->
@stop 
